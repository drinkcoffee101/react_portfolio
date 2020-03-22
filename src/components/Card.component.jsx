import React from 'react'
import { CardInfo } from "./CardInfo.component";
import { MDBView, MDBMask } from 'mdbreact';

export const Card = ({ item }) => {
    return (
        <div className='d-inline-block g-card' >
            <MDBView hover>
                <img
                    className='g-card-image'
                    src={item.imgSrc}
                    alt={item.imgSrc}
                />
                <MDBMask className="flex-center" overlay="black-strong" style={{ borderRadius: '10px' }}>
                    <CardInfo
                        title={item.title}
                        subTtile={item.subTtile}
                        link={item.link} />
                </MDBMask>
            </MDBView>
        </div>
    )
}
