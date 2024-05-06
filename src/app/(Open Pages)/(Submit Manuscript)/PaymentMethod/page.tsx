import breadcrum from "@/app/_Common/_Breadcrum/Breadcrum";

export default function Home() {
  return (
   <>
   {breadcrum("Submit Manuscript", "Payment Method")}
   <div className="col-lg-10 col-md-10 col-sm-10 mt-5 mb-5 mx-auto">
     <div className="formmm" style={{margin: 0, padding: 25}}>
         <h4 className="pb-4">BY CREDIT CARDS</h4>
         <p>We accept payment through VISA, Master Card, American Express, Discover and JCB credit cards via a VeriSign
             certified secured online payment gateway PayPal or CCAvenue. The maximum amount that can be paid by PayPal
             in a single transaction is US$ 10000 only. This is a new India-specific transaction rule (effective from
             June 11, 2013) to comply with the notification of the Reserve Bank of India (i.e. Federal Bank in India),
             which governs and regulates all processing and settlement of receipts facilitated by online payment gateway
             like PayPal. For payment of amounts more than US$ 10000, please choose either CCAvenue or Wire transfer.
         </p>
         <p>
             You need to complete payment in advance during submitting your manuscript. We follow this payment procedure
             to make sure our relationship with you is fair and unhindered by financial difficulties. You may think of
             it as paying for your flight before you fly. You pay for your investment upfront with our guarantee that we
             will provide you with services of highest standard.
         </p>
         <p>
             We offer a maximum of up to 30 day credit period to large corporations, research groups, universities and
             publishing houses with bulk orders.
         </p>
         <div className="mb-60 text-center" style={{marginTop:50}}><img src="images/cards.jpg" className="img-responsive"
                 /></div>
         <h4 className="pb-4">BY ONLINE BANK TRANSFER</h4>
         <p>
             Clients can pay through Wire transfer / Online bank transfer, or send international bank cheques. The
             invoice will contain all the necessary bank transfer information for those wishing to use the system.
             Clients are required to pay for the bank charges incurred during direct bank-to-bank transfers.
         </p>
     </div>
 </div>

 <div className="col-lg-10 col-md-10 col-sm-10 mt-5 mb-5 mx-auto">
     <div className="formmm" style={{margin: 0, padding: 25}}>
         <h4 className="pb-4">BY CREDIT CARDS</h4>
         <p>
             You don't need to worry about the security of your payment because we use two of the most secured payment
             gateways, namely PayPal and CCAvenue, hosted by SSL encryption and certified by VeriSign that processes
             credit card payments for all major banks throughout the world.
         </p>
         <p>
             If you choose CCAvenue as your payment option, it has an additional security feature vide which the payment
             made by you is held back by it until we complete the editing work and return the edited document to you. As
             soon as your payment is received by CCAvenue, we receive an alert from it upon which we immediately set
             about dedicating our time, thought, care, effort and skill into your document without being distracted by
             administrative concerns. In this way, we don't have to worry about chasing late payments or writing off
             debts which means we can offer more attractive pricing to our valuable customers like you.
         </p>
     </div>
 </div>
   </>
  );
}
