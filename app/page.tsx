import Image from "next/image";
import styles from "./Home.module.css";
import avatar from "./assets/images/avatar.png";
import clock from "./assets/images/clock.svg";
import equilibrium from "./assets/images/equilibrium.jpg";
import ethereum from "./assets/images/ethereum.svg";
import view from "./assets/images/view.svg";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.equilibriumWrapper}>
				<Image
					src={equilibrium}
					alt=""
					className={styles.equilibrium}
				/>
				<div className={styles.viewWrapper}>
					<div className={styles.viewBackground} />
					<Image src={view} alt="View" className={styles.view} />
				</div>
			</div>
			<h1 className={styles.header}>Equilibrium #3429</h1>
			<p className={styles.content}>
				Our Equilibrium collection promotes balance and calm.
			</p>
			<div className={styles.ethereum}>
				<div className={styles.ethereumWrapper}>
					<Image src={ethereum} alt="" />
					<p className={styles.ethereumText}>0.041 ETH</p>
				</div>
				<div className={styles.clockWrapper}>
					<Image src={clock} alt="" />
					<p className={styles.clockText}>3 days left</p>
				</div>
			</div>
			<hr className={styles.horizontalLine} />
			<div className={styles.profile}>
				<Image
					src={avatar}
					alt="Jules Wyvern"
					className={styles.photo}
				/>
				<p className={styles.profileText}>
					Creation of
					<span className={styles.profileName}>Jules Wyvern</span>
				</p>
			</div>
		</main>
	);
}
