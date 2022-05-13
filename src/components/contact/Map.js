import React from 'react';
import { YMaps, Map, Placemark} from 'react-yandex-maps';

export default function ContactMap (props) {



    return (

        <YMaps>
            <div style={{width:'100%', height:'400px'}} >
                <Map
                    defaultState={{ center: [51.687986, 39.178694], zoom: 15, }}
                    width={"100%"}
                    height={"100%"}
                >
                    <Placemark
                        geometry={[51.687986, 39.178694]}
                        modules={['geoObject.addon.balloon', 'geoObject.addon.hint']}
                        properties= {{
                            hintContent: "Наш офис",
                            balloonContentHeader: "Всегда Вам рады!",
                            balloonContentFooter: "Частная парковка в наличии",
                        }}
                    />
                </Map>
            </div>
        </YMaps>
    );
}