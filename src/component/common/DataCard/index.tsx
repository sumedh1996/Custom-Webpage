import React from 'react';
import image from '../../../Assets/Images/IG_Sumedh.jpeg';
import dataImage from '../../../Assets/Images/dataImage.png';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

const DataCard = () => {
    return (
        <div style={{ background: '#fff', flex: 1, margin: 20, borderRadius: 10 }}>
            <div style={{
                display: 'flex', flexDirection: 'row', alignItems: 'center', marginTop: 20,
                marginBottom: 10,
                marginLeft: 20, marginRight: 20,
                justifyContent: 'space-between'
            }}>
                <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <img src={image} style={{ height: 60, width: 60, borderRadius: 30 }} />
                    <div style={{ paddingLeft: 10 }}>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <h3>Sumedh Raj</h3>
                            <p style={{ paddingLeft: 10, opacity: 0.5 }}>this is some text</p>
                        </div>
                        <p style={{ opacity: 0.5 }}>this is the subtitle</p>
                    </div>
                </div>
                <div style={{}}>
                    <BiDotsHorizontalRounded size={24} />
                </div>
            </div>
            <div style={{
                marginTop: 0,
                marginBottom: 10,
                marginLeft: 20, marginRight: 20,
            }}>
                <p>
                    I actually have a similar issue, my image is been imported in the index.jsx file, I have the loaders in webpack, the compile face is working fine, as indeed a copy of the image is been created in my server/public/js folder with a random number, and the correct path to it is in the bundler,
</p>
            </div>
            <img src={dataImage} style={{ height: 250, width: '100%', }} />
            <div style={{ background: '#d3d3d3' }}>
                <div style={{ padding: 20 }}>
                    <h3>This is the titile</h3>
                    <p>This is the subtitle</p>
                </div>
            </div>
            <div style={{ justifyContent: 'space-between', display: 'flex', flexDirection: 'row', margin: 20 }}>
                <div style={{ display: 'flex', flexDirection: 'row' }}>
                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <BiDotsHorizontalRounded size={24} />
                        <p>23</p>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'row' }}>
                        <BiDotsHorizontalRounded size={24} />
                        <p>23</p>
                    </div>
                </div>
                <BiDotsHorizontalRounded size={24} />
            </div>

        </div>
    )
}

export default DataCard;
