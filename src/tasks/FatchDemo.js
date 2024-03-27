import React from 'react';

class FatchDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = { mydata: [] };
    }
    componentDidMount() {
        fetch("https://fakestoreapi.com/products")
            .then(res => res.json())
            .then(res => {
                console.table(res);
                this.setState({ mydata: res })
            })
    }
    
    render() {
        return (
            <>
                <h2>FetchDemo</h2>
                {this.state.mydata.map((v, i) => {
                    return (<>
                        <h3>{v.title}</h3>
                        <p>Price : ${v.price}</p>
                        <img src={v.image} width={100} />
                    </>)
                })}
                </>
        );
    }

}
export default FatchDemo;
