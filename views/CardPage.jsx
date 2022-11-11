const React = require('react');
const Layout = require('./Layout');
 
function CardPage({ user, endCards }) {
 return (
   <Layout user={user}>
     <div className="section">
     {endCards.map((endCard) => (
       <div data-topicid={endCard.topicId} data-id={endCard.id} className="topicList" key={endCard.id}>
         <div className="card center">
           <div className="front">
           {/* <img id="front"src="/image/front.jpg" alt="" /> */}
             <div className="div">
                 <p className="text">
                 {endCard.question}
                 </p>
             </div>
           </div>
 
           <div className="back">
           {/* <img id="back"src="/image/back.jpg" alt="" /> */}
             <div className="back-content center">
               <p>answer:
               {' '}
               {endCard.answer}
               </p>
             </div>
             <button className="button">Изучено</button>
           </div>
         </div>
       </div>
     ))}
     </div>
   </Layout>
 );
}
 
module.exports = CardPage;