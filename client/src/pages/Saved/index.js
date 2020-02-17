import React, { Component } from "react";
import Heading from '../../components/Jumbotron';
import SaveResults from "../../components/SaveResults";
import API from "../../utils/API";
import Wrapper from "../../components/Wrapper";

class Saved extends Component {
    state = {
        books: [],
        title: ''
    };

    componentDidMount() {
        this.loadBooks();
    }

    loadBooks = () => {
        API.getBooks()
            .then(res => {
                let result = res.data;
                result.forEach(data => {
                    // console.log(data.title)
                    this.setState({ title: data.title, author: "" })
                    
                })
               
                
            })
            .catch(err => console.log(err));
    }

    render() {
        console.log(this.state.title)
        return (
            <div>
                <Heading />
                <Wrapper>
                    {/* {this.state.books.map(({book}, index) => (
                        <SaveResults
                            key={index}
                            title={book}

                        /> 
                     ))} */}
                </Wrapper >
            </div>
        )
    }
}

export default Saved;