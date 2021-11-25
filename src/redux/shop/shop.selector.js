import { createSelector } from "reselect";

const selectShop = state => state.shop;

export const selectShopCollection = createSelector(
    selectShop,
    shop => shop.shopData
)

export const selectShopCollectionsForPreview = createSelector(
    selectShopCollection,
    shopData => Object.keys(shopData).map(key => shopData[key])
)

export const selectCollectionCategory = collectionUrlParams => 
    createSelector(
        selectShopCollection,
        shopData => shopData[collectionUrlParams]
    )
