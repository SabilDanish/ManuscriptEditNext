
import styles from "./Breadcrum.module.css";

export default function breadcrum(
    path:string,
    header:string
) {
    return (
      <>
      <section className={styles['bg-inner']}>
    <div className="container">
        <div className="row">
            <div className="col-md-12">
                <h6 style={{color:'#fff', fontSize: 14}}>{path}</h6>
                <h4 style={{color:'#fff'}}>{header}</h4>
            </div>
        </div>
    </div>
</section>
      </>
    );
}