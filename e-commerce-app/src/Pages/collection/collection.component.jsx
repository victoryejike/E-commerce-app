import React from "react";
import "./collection.styles.scss";
import { connect } from "react-redux";
import { selectCollectionCategory } from "../../redux/shop/shop.selector";
import CollectionItem from "../../Components/Collection-item/Collection-item.component";

const CollectionPage = ({ collection, match }) => {
    console.log(match.params)
    const { title, items } = collection;
    return (
        <div className="collection-page">
            <h2 className="title">{title}</h2>
            <div className="items">
                {
                    items.map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
                }
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollectionCategory(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);