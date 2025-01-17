import React, { useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Center, Wrap, WrapItem } from "@chakra-ui/react"
import { getAllProductsByCategory } from '../../store/category'
import CartDrawer from '../Drawer/CartDrawer'
import Item from '../Item'
import {CategoryHero} from './CategoryHero'


export default function Category() {
    const dispatch = useDispatch();
    const allCatProducts = useSelector((state) => Object.values(state.category.categories));
    const cart = useSelector((state) => state.cart)
    const { id } = useParams()



    useEffect(() => {
        dispatch(getAllProductsByCategory(id));
    }, [dispatch, id])


//subscribe to cart on line 14, pass as prop to CartDrawer on 30 where state of cart gets monitored for change
//subscribe to allCatProducts and pass attributes of each item on line 41 as props to Item to render each item with product name, price etc to page


    return (
        <>
        <CategoryHero />
            <CartDrawer cart={cart} />


                <Wrap spacing="20px">


                    {allCatProducts.map((product, idx) => (

                        <WrapItem key={product.id}>
                            <Center>
                            <Item price={product.regular_price} name={product.name} image={product.image_url} product={product} id={product.id}/>
                            </Center>
                        </WrapItem>


                    ))}
                </Wrap>






        </>
    )

}
