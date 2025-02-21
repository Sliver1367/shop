import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            orders: [],
            currentItems: [],
            items: [
                {
                    id: 1,
                    title: 'Gray chair',
                    img: 'gray-chair.jpeg',
                    desc: 'Lorem adsdasd f adfa. Fa fasf safaf, safafffas af',
                    category: 'chairs',
                    price: '49.99'
                },
                {
                    id: 2,
                    title: 'Table',
                    img: 'table.jpeg',
                    desc: 'Lorem ads dasdf adfa. Fa faadadfaf  dad, safa fffas af',
                    category: 'tables',
                    price: '149.00'
                },
                {
                    id: 3,
                    title: 'Sofa',
                    img: 'sofa.jpeg',
                    desc: 'Lorem saaaf daadfa. Fa faadadf hhhjk 7fafdad, sajgm ffaf',
                    category: 'sofa',
                    price: '549.99'
                },
                {
                    id: 4,
                    title: 'Lamp',
                    img: 'lamp.jpeg',
                    desc: 'Lorem saasg allgk. Gaadadf hsfrx dgsk 7fad, salkfsf fs',
                    category: 'light',
                    price: '25.00'
                },
                {
                    id: 5,
                    title: 'White chair',
                    img: 'white-chair.jpeg',
                    desc: 'Loremsg all dagk. Gaad dffadf hsff skdsft, poprwej dfsk',
                    category: 'chairs',
                    price: '49.99'
                },
            ],
            showFullItem: false,
            fullItem: {}
        }
        this.state.currentItems = this.state.items;
        this.addToOrder = this.addToOrder.bind(this);
        this.deleteOrder = this.deleteOrder.bind(this);
        this.chooseCategory = this.chooseCategory.bind(this);
        this.onShowItem = this.onShowItem.bind(this);


    }

    render() {
        return (
            <div className={"wrapper"}>
                <Header orders={this.state.orders} onDelete={this.deleteOrder}/>
                <Categories chooseCategory={this.chooseCategory}/>
                <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder}/>

                {this.state.showFullItem && <ShowFullItem onShowItem={this.onShowItem} onAdd={this.addToOrder} item={this.state.fullItem}/>}
                <Footer/>
            </div>
        );
    }

    onShowItem(item) {
        this.setState({fullItem: item})
        this.setState({showFullItem: !this.state.showFullItem})
    }

    chooseCategory(category) {
        if (category === 'all') {
            this.setState({currentItems: this.state.items})
            return
        }
        this.setState({
            currentItems: this.state.items.filter(el => el.category === category)
        })
    }

    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }

    addToOrder(item) {
        let isInArray = false
        this.state.orders.forEach(el => {
            if (el.id === item.id)
                isInArray = true
        })
        if (!isInArray)
            this.setState({orders: [...this.state.orders, item]})
    }


}

export default App;
