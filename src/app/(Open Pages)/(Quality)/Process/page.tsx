import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";

export default function Home() {
  return (
   <>
   {breadcrum("Quality", "Editorial Processes")}
<section className="pt-5 pb-5">
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <h3 className="pt-5">Editorial Processes Overview</h3>
                <p className="pt-3">
                    ASetting the stage for the importance of editing in the realm of written communication.
                    Introduction to the multifaceted nature of editing and its impact on clarity and effectiveness.
                </p>
            </div>
            <div className="col-md-6">
                <img src="/images/innerimg/re-1.jpg" alt="" width="100%" style={{borderRadius: 10}}/>
            </div>
        </div>
        </div>
</section>

    <section id="features" className="features">
      <div className="container" data-aos="fade-up">

        <ul className="nav nav-tabs row gy-4 d-flex">

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link1 active show" data-bs-toggle="tab" data-bs-target="#tab-1">
              <i className="bi bi-binoculars color-cyan"></i>
              <h4>Addressing your Queries</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link1" data-bs-toggle="tab" data-bs-target="#tab-2">
              <i className="bi bi-box-seam color-indigo"></i>
              <h4>Confirmation of your Order</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link1" data-bs-toggle="tab" data-bs-target="#tab-3">
              <i className="bi bi-brightness-high color-teal"></i>
              <h4>Assignment of Order</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link1" data-bs-toggle="tab" data-bs-target="#tab-4">
              <i className="bi bi-command color-red"></i>
              <h4>Review in Progress</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link1" data-bs-toggle="tab" data-bs-target="#tab-5">
              <i className="bi bi-easel color-blue"></i>
              <h4>Delivering the Polished Paper</h4>
            </a>
          </li>

          <li className="nav-item col-6 col-md-4 col-lg-2">
            <a className="nav-link1" data-bs-toggle="tab" data-bs-target="#tab-6">
              <i className="bi bi-map color-orange"></i>
              <h4>Answering Feedbacks</h4>
            </a>
          </li>

        </ul>

        <div className="tab-content">

          <div className="tab-pane active show" id="tab-1">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1" data-aos="fade-up" data-aos-delay="100">
                <h3>Addressing your queries</h3>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> Your queries acknowledged by the Client Relationship Executive.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Queries are forwarded to the subject matter expert.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Pre-requisites and details of related services appropriate to your needs are conveyed to you.</li>
                </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center" data-aos="fade-up" data-aos-delay="200">
                <img src="/img/features-1.svg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className="tab-pane" id="tab-2">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Confirmation of your Order</h3>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> You make the payment and confirm the service.</li>
                  <li><i className="bi bi-check-circle-fill"></i> You provide the relevant documents.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Our team acknowledges the receipt of all documents and rechecks for any missing information.</li>
                </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <img src="/img/features-2.svg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className="tab-pane" id="tab-3">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Assignment of Order</h3>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> The chief editor designates one of the subject matter experts to deal with the paper.</li>
                  <li style={{whiteSpace:"pre"}}><i className="bi bi-check-circle-fill"></i> The subject expert does an in-depth study on the paper for understanding the client's requirement.</li>
                  <li><i className="bi bi-check-circle-fill"></i> The real work on the paper begins as per the preferred service of the client.</li>
                </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <img src="/img/features-3.svg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className="tab-pane" id="tab-4">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Review in Progress</h3>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> A team of experienced associate editors do the first round of review rechecking the language and &nbsp; &nbsp; &nbsp; &nbsp; its confirmation with the target journal guidelines/instructions provided by the client.</li>
                  <li><i className="bi bi-check-circle-fill"></i> The chief editor ensures the paper is error free to maximum extent and does the second round of &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; review.</li>
                </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <img src="/img/features-4.svg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className="tab-pane" id="tab-5">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Delivering the Polished Paper</h3>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> All documents are rechecked for any missing information or files.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Final paper and related documents are conveyed to the client for feedback.</li>
                </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <img src="/img/features-5.svg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

          <div className="tab-pane" id="tab-6">
            <div className="row gy-4">
              <div className="col-lg-8 order-2 order-lg-1">
                <h3>Answering Feedbacks</h3>
                <ul>
                  <li><i className="bi bi-check-circle-fill"></i> Scope for re-editing or modifications in the paper based on the client's feedback.</li>
                  <li><i className="bi bi-check-circle-fill"></i> Rework starts after immediate acknowledgement to the client's concerns.</li>
                  <li><i className="bi bi-check-circle-fill"></i> The concerned subject expert validates the incorporated changes required at the client's end.</li>
                  <li><i className="bi bi-check-circle-fill"></i> The final re-edited paper undergoes the complete rounds of quality check, taking the client a step &nbsp; &nbsp; &nbsp; &nbsp; closer to reaching their publication goals.</li>
                </ul>
              </div>
              <div className="col-lg-4 order-1 order-lg-2 text-center">
                <img src="/img/features-6.svg" alt="" className="img-fluid"/>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
   </>
  );
  
}
