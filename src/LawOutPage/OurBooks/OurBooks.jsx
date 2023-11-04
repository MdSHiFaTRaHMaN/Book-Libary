
const Ourbooks = () => {
    return (
        <div className="bg-[#2e3267]">
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-24 w-11/12 mx-auto">
                    <div className="flex flex-wrap w-full mb-20">
                        <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Pitchfork Kickstarter Taxidermy</h1>
                            <div className="h-1 w-20 bg-indigo-500 rounded"></div>
                        </div>
                    </div>
                    {/* <div className="flex flex-wrap -m-4">
                        <div className="xl:w-1/5 md:w-1/2 p-4">
                            <div className="bg-[#424890]  border border-sky-600">
                                <div className="bg-[#2e3267]">
                                    <img className="h-60 w-48 rounded  object-center mx-auto mb-6" src="https://img.thriftbooks.com/api/images/i/m/614C291F397838279B28920727BF119DFBFEBA4A.jpg" alt="content" />
                                </div>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 p-4">
                            <div className="bg-[#424890] p-6 rounded-lg">
                                <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://img.thriftbooks.com/api/images/i/m/614C291F397838279B28920727BF119DFBFEBA4A.jpg" alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Colosseum Roma</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 p-4">
                            <div className="bg-[#424890] rounded-lg">
                                <div className="">
                                    <img className="h-60 w-40 rounded object-cover object-center mx-auto mb-6" src="https://img.thriftbooks.com/api/images/i/m/614C291F397838279B28920727BF119DFBFEBA4A.jpg" alt="content" />
                                </div>
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">Great Pyramid of Giza</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 p-4">
                            <div className="bg-[#424890] rounded-lg">
                                <img className="h-60 rounded w-40 object-cover object-center mb-6" src="https://img.thriftbooks.com/api/images/i/m/614C291F397838279B28920727BF119DFBFEBA4A.jpg" alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                        <div className="xl:w-1/5 md:w-1/2 p-4">
                            <div className="bg-[#424890] rounded-lg">
                                <img className="h-60 rounded w-40 object-cover object-center mb-6" src="https://img.thriftbooks.com/api/images/i/m/614C291F397838279B28920727BF119DFBFEBA4A.jpg" alt="content" />
                                <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">SUBTITLE</h3>
                                <h2 className="text-lg text-gray-900 font-medium title-font mb-4">San Francisco</h2>
                                <p className="leading-relaxed text-base">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
                            </div>
                        </div>
                    </div> */}
                    <div className="mx-auto">
                        <div className="flex justify-between gap-9">
                            <div className="card rounded-r-2xl bg-[#424890] card-side shadow-xl">
                                <figure><img src="https://img.thriftbooks.com/api/images/i/m/614C291F397838279B28920727BF119DFBFEBA4A.jpg" className="h-60" alt="Movie" /></figure>
                                <div className="card-body text-white">
                                    <h2 className="card-title">Name: Amer soner Bangla</h2>
                                    <div>
                                    <p>Author Name: Josim Uddin</p>
                                    <p>Category: History</p>
                                    <p>Ratting: 2/5</p>
                                        <p>publish Date: 23/4/2002</p>
                                        <button className="btn btn-success -mb-3 mt-2">Show Details</button>
                                    </div>
                                        
                                                                         
                                </div>
                            </div>
                            <div className="card card-side bg-base-100 shadow-xl">
                                <figure><img src="https://img.thriftbooks.com/api/images/i/m/614C291F397838279B28920727BF119DFBFEBA4A.jpg" className="h-60" alt="Movie" /></figure>
                                <div className="card-body">
                                    <h2 className="card-title">New movie is released!</h2>
                                    <p>Click the button to watch on Jetflix app.</p>
                                    <div className="card-actions justify-end">
                                        <button className="btn btn-primary">Watch</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>




                </div>
            </section>
        </div>
    );
};

export default Ourbooks;