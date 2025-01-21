import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Culture = () => {
    const [data, setData] = useState();

    const getData = () => {
        axios.get('https://plexus-technology.in/api/culture/read2')
            .then((res) => {
                setData(res.data.data);
                // setLoading(false);
            })
            .catch((err) => {
                console.error(err);
                toast.error("Failed to fetch data.");
                // setLoading(false);
            });
    };

    useEffect(() => {
        getData();
    }, []);


    return (
        <>
            <section className="py-5 my-5">
                {data && data.length > 0 ? (
                    <>
                        <h2 className="hero-title w-100 h-100 m-0 text-center" style={{ color: "#132028", fontWeight: "600" }}>
                            Life at <span style={{ color: "#0777AB" }}>Plexus</span>
                        </h2>
                        <p className="container space text-center my-3">
                            At Plexus Technology, we are committed to creating a joyful and supportive workplace where our employees feel valued and happy. We celebrate every festival together, like Holi, Diwali, and Navratri, making every moment special and fun. Our yearly trips to exciting destinations and quarterly activities keep the energy alive, fostering strong bonds and boosting motivation. Here, work is more than just a job—it’s about enjoying every step of the journey together.
                        </p>

                        {/* =========== image ============= */}
                        <div className="slider-container">
                            <div style={{ marginTop: "100px" }} className="slider-content">
                                {data.map((data, index) => (
                                    <div key={index} className="d-flex align-items-center justify-content-center" style={{ width: "800px" }}>
                                        <div className="w-50 rounded-3" style={{ height: "500px" , padding:"0px 1px"}}>
                                            <img
                                                src={`https://plexus-technology.in/api/public/images/culture/${data[0]}`}
                                                alt="Top"
                                                className="object-fit-cover object-position-top rounded-3 w-100 h-100"
                                            />
                                        </div>
                                        <div className="d-flex flex-column px-2 gap-2 align-items-center justify-content-center w-50">
                                            <img
                                                src={`https://plexus-technology.in/api/public/images/culture/${data[1]}`}
                                                alt="Top"
                                                className="w-100 object-fit-cover object-position-top rounded-3"
                                                style={{ height: "245px" }}
                                            />
                                            <img
                                                src={`https://plexus-technology.in/api/public/images/culture/${data[2]}`}
                                                alt="Bottom"
                                                className="w-100 object-fit-cover object-position-top rounded-3"
                                                style={{ height: "245px" }}
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </>
                ) : (
                    <p className="text-center"></p> // Optional message if no data is found
                )}
            </section>

        </>
    );
};

export default Culture;
