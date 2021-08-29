import React from 'react';
import AboutSectionMenu from './../../Partials/AboutSectionMenu';
import Jumbotron from 'react-bootstrap/Jumbotron';

/**
 * Component for showing the WhoAre page.
 * 
 * @component
 * @example
 * return (
 *   <WhoAre />
 * )
 */
const WhoAre = () => {
    return (
        <div className="page">
            <Jumbotron className="page where are">
                <h2>Who Are - About page</h2>
                <p>This is the who are page</p>
                <hr />
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ut est non mauris iaculis vulputate. Vivamus luctus sapien et nisl mattis consequat. Vestibulum nec varius sem. Curabitur aliquet sapien in diam efficitur euismod. Fusce molestie nibh vel suscipit eleifend. Suspendisse dignissim et lectus at tempus. Nam feugiat lorem ut pharetra porta. Duis hendrerit hendrerit metus, vel laoreet libero commodo sed. Curabitur nunc eros, venenatis et diam a, hendrerit volutpat neque. Aliquam tempus cursus efficitur. Proin consequat fringilla massa, vitae imperdiet nibh feugiat at. Nulla malesuada vestibulum dolor et euismod. Donec eu urna urna.
                </p>
                <p>
                    Sed imperdiet nunc eget ante aliquam auctor. Aliquam rhoncus quam sed sodales imperdiet. Aliquam erat volutpat. Sed mattis luctus pretium. Suspendisse tempor, nunc quis consectetur aliquam, metus orci porttitor augue, nec malesuada ipsum mauris eget tortor. Donec ut eleifend lorem. Quisque sagittis fermentum suscipit. Sed quis efficitur ex.
                </p>
                <p>
                    Sed eget neque ante. Aliquam euismod ac lectus quis tempor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam placerat consectetur felis ut fermentum. Ut a mauris vel erat porta congue. Sed ut fermentum nisl, ac maximus turpis. Nunc rutrum, ipsum vitae laoreet rutrum, purus mi fermentum leo, ut pulvinar velit urna id leo. Vivamus eu mi enim. Praesent ac ultrices mi, lacinia interdum dui. Morbi tempus vulputate lacus ac luctus. Aenean in arcu interdum, efficitur quam eu, suscipit felis.
                </p>
            </Jumbotron>
            <AboutSectionMenu />
        </div>
    );
}

export default WhoAre;