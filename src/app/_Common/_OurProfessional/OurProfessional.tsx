"use client";

import { useEffect } from 'react';
import styles from './OurProfessional.module.css'; // Assuming you have a CSS module


export default function Home() {
	useEffect(() => {
		if (window.innerWidth <= 425) {
			let currentIndex = 0;
			const slides = document.querySelectorAll(`.${styles.slide}`);
			const totalSlides = slides.length;

			const showSlide = (index: number) => {
				slides.forEach((slide, i) => {
					(slide as HTMLElement).style.transform = `translateX(${100 * (i - index)}%)`;
				});
			};

			const autoSlide = () => {
				currentIndex = (currentIndex + 1) % totalSlides;
				showSlide(currentIndex);
			};

			showSlide(currentIndex);
			const slideInterval = setInterval(autoSlide, 3000);

			return () => clearInterval(slideInterval); // Cleanup interval on component unmount
		}
	}, []);

	return (
		<>

			<div className="container" style={{marginBottom:"40px"}}>


			<div className="row">
				<div className="col-lg-12">
					<div className="section_title text_center" style={{marginBottom:"20px"}}>
						<div className="section_main_title">
							<h1>Our professionals</h1>
						</div>
						{/* <div className="em_bar">
							<div className="em_bar_bg"></div>
						</div> */}
					</div>
				</div>
			</div>



				<div className="row">
					<div className={styles.slider}>
						<div className={styles.slide}>
							<div className={styles.card}>
								<div className={styles.cardHeader}>
									<img className={styles.ExpImg} src="/images/ourprof/namrataM.png" alt="Dr. E M M" />
									<h2>D</h2>
								</div>
								<div className={styles.ExpName}><h2>Dr. E M M</h2></div>
								<div className={styles.cardContent}>
									<p><span className={styles.boldText}>PhD<br /></span> Cellular Biology</p>
									<div className={styles.tags}>
										<div className={styles.tag}>Immunology</div>
										<div className={styles.tag}>Bio-Technology</div>
										<div className={styles.tag}>Microbiology</div>
										<div className={styles.tag}>Chemistry</div>
										<div className={styles.tag}>+9</div>
									</div>
									<div className={styles.expFlag}>
										<p className={styles.experience}>15+ years</p>
										<img className={styles.flag} src="https://flagcdn.com/us.svg" alt="USA Flag" />
									</div>
								</div>
							</div>
						</div>
						<div className={styles.slide}>
							<div className={styles.card}>
								<div className={styles.cardHeader}>
									<img className={styles.ExpImg} src="/images/ourprof/dr_lb.png" alt="Dr. L B" />
									<h2>D</h2>
								</div>
								<div className={styles.ExpName}><h2>Dr. L B</h2></div>
								<div className={styles.cardContent}>
									<p><span className={styles.boldText}>PhD<br /></span> Metallurgy & Materials Science</p>
									<div className={styles.tags}>
										<div className={styles.tag}>Immunology</div>
										<div className={styles.tag}>Bio-Technology</div>
										<div className={styles.tag}>Microbiology</div>
										<div className={styles.tag}>Chemistry</div>
										<div className={styles.tag}>+9</div>
									</div>
									<div className={styles.expFlag}>
										<p className={styles.experience}>17+ years</p>
										<img className={styles.flag} src="https://flagcdn.com/za.svg" alt="South Africa Flag" />
									</div>
								</div>
							</div>
						</div>
						<div className={styles.slide}>
							<div className={styles.card}>
								<div className={styles.cardHeader}>
									<img className={styles.ExpImg} src="/images/ourprof/dr_dl.png" alt="Dr. D L" />
									<h2>D</h2>
								</div>
								<div className={styles.ExpName}><h2>Dr. D L</h2></div>
								<div className={styles.cardContent}>
									<p><span className={styles.boldText}>PhD<br /></span> Music Composition</p>
									<div className={styles.tags}>
										<div className={styles.tag}>Immunology</div>
										<div className={styles.tag}>Bio-Technology</div>
										<div className={styles.tag}>Microbiology</div>
										<div className={styles.tag}>Chemistry</div>
										<div className={styles.tag}>+9</div>
									</div>
									<div className={styles.expFlag}>
										<p className={styles.experience}>20+ years</p>
										<img className={styles.flag} src="https://flagcdn.com/za.svg" alt="South Africa Flag" />
									</div>
								</div>
							</div>
						</div>
						<div className={styles.slide}>
							<div className={styles.card}>
								<div className={styles.cardHeader}>
									<img className={styles.ExpImg} src="/images/ourprof/dr_ms.png" alt="Dr. B H" />
									<h2>D</h2>
								</div>
								<div className={styles.ExpName}><h2>Dr. B H</h2></div>
								<div className={styles.cardContent}>
									<p><span className={styles.boldText}>PhD<br /></span> Microbiology & Immunology</p>
									<div className={styles.tags}>
										<div className={styles.tag}>Immunology</div>
										<div className={styles.tag}>Bio-Technology</div>
										<div className={styles.tag}>Microbiology</div>
										<div className={styles.tag}>Chemistry</div>
										<div className={styles.tag}>+9</div>
									</div>
									<div className={styles.expFlag}>
										<p className={styles.experience}>20+ years</p>
										<img className={styles.flag} src="https://flagcdn.com/za.svg" alt="South Africa Flag" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>


		</>
	);
}
