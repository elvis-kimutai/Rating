import React from 'react';
import BlogBanner from '../BlogBanner/BlogBanner';

const Blog = () => {
    return (
        <div>
            <div>
                <BlogBanner></BlogBanner>
            </div>
            <div className='p-4 md:m-0' style={{ backgroundColor: `#efefed`}}>
            <div className="card w-full md:w-10/12 mx-auto bg-base-100 shadow-xl my-5">
                <div className="card-body">
                    <h2 className="card-title">Top Pubs to Visit in Ireland</h2>
                    <p>
                        Ireland is renowned for its warm and inviting pubs, each offering a unique charm. Whether you're looking for a lively atmosphere, traditional music, or a quiet corner to enjoy a pint, Irish pubs have something for everyone. Here are a few must-visit pubs in Ireland:
                    </p>
                    <ul>
                        <li><b>The Temple Bar (Dublin):</b> Famous for its vibrant ambiance and extensive whiskey collection.</li>
                        <li><b>O'Connor's Famous Pub (Galway):</b> A charming traditional pub with live music and cozy decor.</li>
                        <li><b>The Crown Liquor Saloon (Belfast):</b> A historic pub known for its stunning Victorian architecture.</li>
                        <li><b>Johnnie Fox's Pub (Dublin Mountains):</b> One of the highest pubs in Ireland, offering great food and entertainment.</li>
                        <li><b>McCarthy's Bar (Dingle):</b> A classic Irish pub with a rich history and great local beers.</li>
                    </ul>
                </div>
            </div>

            <div className="card w-full md:w-10/12 mx-auto bg-base-100 shadow-xl mb-5">
                <div className="card-body">
                    <h2 className="card-title">The Best Irish Beers to Try</h2>
                    <p>
                        Ireland is synonymous with great beer. Here are some of the most popular Irish beers you should try during your visit:
                    </p>
                    <ul>
                        <li><b>Guinness:</b> The iconic stout with a rich, creamy texture and roasted flavor.</li>
                        <li><b>Smithwick's:</b> A classic Irish red ale with a balanced malty and hoppy taste.</li>
                        <li><b>Harp Lager:</b> A refreshing lager that's perfect for any occasion.</li>
                        <li><b>Murphy's Stout:</b> A smooth and slightly sweeter stout than Guinness.</li>
                        <li><b>O'Hara's Irish Stout:</b> A craft stout with rich coffee and chocolate notes.</li>
                        <li><b>Galway Bay Brewery's Full Sail IPA:</b> A craft IPA with a bold and hoppy character.</li>
                    </ul>
                </div>
            </div>

            <div className="card w-full md:w-10/12 mx-auto bg-base-100 shadow-xl mb-5">
                <div className="card-body">
                    <h2 className="card-title">What Makes Irish Pubs Special?</h2>
                    <p>
                        Irish pubs are celebrated worldwide for their unique atmosphere. Here are some features that set them apart:
                    </p>
                    <ul>
                        <li><b>Traditional Music:</b> Many Irish pubs host live traditional music sessions, creating a lively and authentic vibe.</li>
                        <li><b>Warm Hospitality:</b> The friendly and welcoming nature of pub staff and patrons makes everyone feel at home.</li>
                        <li><b>Hearty Pub Food:</b> Enjoy delicious meals like Irish stew, fish and chips, or a classic "toastie" sandwich.</li>
                        <li><b>Community Spirit:</b> Pubs often serve as community hubs where locals and visitors come together to share stories and laughter.</li>
                        <li><b>Historic Charm:</b> Many pubs have a rich history, with interiors that showcase traditional decor and architecture.</li>
                    </ul>
                </div>
            </div>

            <div className="card w-full md:w-10/12 mx-auto bg-base-100 shadow-xl mb-5">
                <div className="card-body">
                    <h2 className="card-title">How to Enjoy a Night Out in an Irish Pub</h2>
                    <p>
                        Visiting an Irish pub is an unforgettable experience. Here's how to make the most of your night out:
                    </p>
                    <ul>
                        <li><b>Try the Local Brews:</b> Always ask for recommendations and sample the local beers on tap.</li>
                        <li><b>Join a Music Session:</b> If there's live music, feel free to sing along or even bring your instrument if you're a musician.</li>
                        <li><b>Engage with Locals:</b> Strike up a conversation with the locals—they often have great stories to share.</li>
                        <li><b>Enjoy the Food:</b> Pair your drinks with some traditional Irish pub food for a full experience.</li>
                        <li><b>Embrace the Atmosphere:</b> Take in the cozy ambiance and let yourself relax and enjoy the moment.</li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Blog;
