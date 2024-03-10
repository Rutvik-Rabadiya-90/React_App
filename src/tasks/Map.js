import React, { Component } from 'react';

class Map extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            myarray: [{ name: "Rutvik", gender: "male" },
            { name: "Rutvik1", gender: "male" },
            { name: "visu", gender: "female" }]
        };
    }

    render() {
        return (<>
            <h2>Map</h2>
                <table border={1}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>gender</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.myarray.map((v,i)=>{
                            return(<tr key={i}>
                                <td>{i+1}</td>
                                <td>{v.name}</td>
                                <td>{v.gender}</td>
                            </tr>)
                        })}
                    </tbody>
                </table>
        </>)
    }


}

export default Map;
