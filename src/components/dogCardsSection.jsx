import React from 'react'
import Card from "./card";

export default function (props) {
    return (
        <div className="mg-3">
            {props.dogsBreed.map(dogB => {
                return (
                    (dogB.CategoryName.toLowerCase().includes(props.searchItem.toLocaleLowerCase()) &&
                        <div className="row mb-12" style={{marginTop:'4%',marginBottom:"2%"}}>
                            <h1 className="fs-3 ms-3">{dogB.CategoryName}</h1>
                            <hr></hr>
                            {props.dogsData.map((dog, index) => {
                                return (
                                    (dogB.CategoryName === dog.Breed && dog.Breed.toLowerCase().includes(props.searchItem.toLocaleLowerCase())) &&
                                    <Card key={index} k={index} data={dog} className="col-12 col-md-6 col-lg-3"/>
                                )
                            })}
                        </div>)
                )

            })
            }

        </div>
    )
}
