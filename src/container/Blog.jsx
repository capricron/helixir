import React, { Component } from "react";
import baju from './../image/baju.png'
import { Link } from "react-router-dom";

class Blog extends Component {

    constructor(props){
        super(props)
        this.state = {
            desk: `Raden Trunajaya adalah seorang bangsawan di Daerah Madura, daerah yang telah 
            ditaklukan oleh Kerajaan Mataram Islam dibawah kepemimpinan Sultan Agung Hanyokrokusumo, 
            Sultan Agung memiliki seorang anak bernama Raden Mas Sayyidina atau biasa dikenal dengan 
            Amangkurat I.`
        }
    }

    baju(){
        return <img src={baju} />
    }

    render(){
        return (
            <React.Fragment>
                <div className="blog">
                    <h1 className="text-center">Our Produk</h1>
                    <div className="row">
                        <div className="col-md-6">
                            <this.baju className="baju text-center" />
                        </div>
                        <div className="col-md-6">
                            <p className="desk">{this.state.desk}
                            <Link to="/blog"> Read More </Link></p>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Blog;