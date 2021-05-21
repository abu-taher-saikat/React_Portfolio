import React from 'react'
import { FaPaintBrush, FaPalette, FaCompactDisc, FaPuzzlePiece, FaGamepad, FaChartBar } from "react-icons/fa";

const Service = () => {
    return (
        <div>
           <section className="section section-services" id="services">
			<div className="container">
				<div className="section-head text-center">
					<span>WHAT I DO</span>
					<h2>My Services</h2>
				</div>

				<div className="row mt-4">
					<div className="col-sm-6 col-md-4">
						<div className="services-flip wow fadeInUp" data-wow-duration="1.5s"
                         style={{visibility: "visible", animationDuration: "1.5s", animationName: "fadeInUp"}}
                        >
							<div className="services-list">
								<div className="services-list-front services-list-1">
									<div className="flip-content">
										<h5 className="mb-0">Graphic Design</h5>
									</div>
								</div>
								<div className="services-list-back">
									<div className="flip-content">
										<div className="services-list-icon">
                                            <FaPaintBrush/>
										</div>
										<div className="mt-4">
											<h5 className="mb-0">Graphic Design</h5>
											<p className=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4">
						<div className="services-flip wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".2s" 
                        style={{visibility:"visible", animationDuration:'1.5s', animationDelay: "0.2s", animationName: "fadeInUp"}}
                        >
							<div className="services-list">
								<div className="services-list-front services-list-2">
									<div className="flip-content">
										<h5 className="mb-0">Web Development</h5>
									</div>
								</div>
								<div className="services-list-back">
									<div className="flip-content">
										<div className="services-list-icon">
                                            <FaPalette/>
										</div>
										<div className="mt-4">
											<h5 className="mb-0">Web Development</h5>
											<p className=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4">
						<div className="services-flip wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".4s"
                        style={{visibility:"visible", animationDuration:'1.5s', animationDelay: "0.4s", animationName: "fadeInUp"}}
                         >
							<div className="services-list">
								<div className="services-list-front services-list-3">
									<div className="flip-content">
										<h5 className="mb-0">Media Marketing</h5>
									</div>
								</div>
								<div className="services-list-back">
									<div className="flip-content">
										<div className="services-list-icon">
                                            <FaCompactDisc/>
										</div>
										<div className="mt-4">
											<h5 className="mb-0">Media Marketing</h5>
											<p className=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4">
						<div className="services-flip wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".6s" 
                        style={{visibility:"visible", animationDuration:'1.5s', animationDelay: "0.6s", animationName: "fadeInUp"}}
                        >
							<div className="services-list">
								<div className="services-list-front services-list-4">
									<div className="flip-content">
										<h5 className="mb-0">Advetising</h5>
									</div>
								</div>
								<div className="services-list-back">
									<div className="flip-content">
										<div className="services-list-icon">
											<FaPuzzlePiece/>
										</div>
										<div className="mt-4">
											<h5 className="mb-0">Advetising</h5>
											<p className=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4">
						<div className="services-flip wow fadeInUp" data-wow-duration="1.5s" data-wow-delay=".8s"
                        style={{visibility:"visible", animationDuration:'1.5s', animationDelay: "0.8s", animationName: "fadeInUp"}}
                         >
							<div className="services-list">
								<div className="services-list-front services-list-5">
									<div className="flip-content">
										<h5 className="mb-0">Game Development</h5>
									</div>
								</div>
								<div className="services-list-back">
									<div className="flip-content">
										<div className="services-list-icon">
                                            <FaGamepad/>
										</div>
										<div className="mt-4">
											<h5 className="mb-0">Game Development</h5>
											<p className=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className="col-sm-6 col-md-4">
						<div className="services-flip wow fadeInUp" data-wow-duration="1.5s" data-wow-delay="1s"
                        style={{visibility:"visible", animationDuration:'1.5s', animationDelay: "1s", animationName: "fadeInUp"}}
                        >
							<div className="services-list">
								<div className="services-list-front services-list-6">
									<div className="flip-content">
										<h5 className="mb-0">Analytics</h5>
									</div>
								</div>
								<div className="services-list-back">
									<div className="flip-content">
										<div className="services-list-icon">
                                            <FaChartBar/>
										</div>
										<div className="mt-4">
											<h5 className="mb-0">Analytics</h5>
											<p className=" mt-3">Modern and mobile-ready website that will help of your marketing.</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
        </div>
    )
}

export default Service
