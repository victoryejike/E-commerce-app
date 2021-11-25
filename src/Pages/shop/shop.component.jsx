import React from "react";
import "./shop.styles.scss";
import { Route } from "react-router-dom";
import CollectionsOverview from "../../Components/collections-overview/collections-overview.component";
import CollectionPage from "../collection/collection.component";

const ShopPage = ({ match }) => {
    console.log(match.url)
    return (
        <div className="shop-page">
            <Route exact path={`${match.path}`} component={CollectionsOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
    )
}



export default (ShopPage);