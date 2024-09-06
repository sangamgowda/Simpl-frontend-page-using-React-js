import React from 'react';
// import './TwoPartitionLayout.css'; // Import the CSS

function TwoPartitionLayout() {
  return (
    <>
    <div className="container">
      <div className="sidebar">
        <div className="theme">
        <h2 >Perfect Indian <br/>Wedding Planner</h2>
        <a href=''>BUY </a>
        </div>
        </div>
        
      </div>
      <body>
      <div className="scroll">
            <div className="page1">
            <section className="container1">
                
                <div className="card">
                    <div className="card-image card-1">
                        <h2>Wedding<br/>Planner</h2>
                        <p></p>
                       <a href=''>View</a>
                    </div>
                </div>
                <div className="card">  
                    <div className="card-image card-2">
                        <h2>Bride and Groom<br/>Dress</h2>
                        <p></p>
                        <a href=''>View</a>
                    </div>
                </div>
                
            </section>
            </div>
            <div className="page2">
            <section className="container1">
                
                <div className="card">
                    <div className="card-image card-3">
                        <h2>Engagement</h2>
                        <p></p>
                       <a href=''>View</a>
                    </div>
                </div>
                <div className="card">  
                    <div className="card-image card-4">
                        <h2>Mehendi<br/>Haldi</h2>
                        <p></p>
                        <a href=''>View</a>
                    </div>
                </div>
                
            </section>
            </div>
            <div className="page3"><section className="container1">
                
                <div className="card">
                    <div className="card-image card-5">
                        <h2>Marriage</h2>
                        <p></p>
                       <a href=''>View</a>
                    </div>
                </div>
                <div className="card">  
                    <div className="card-image card-6">
                        <h2>Reception</h2>
                        <p></p>
                        <a href=''>View</a>
                    </div>
                </div>
                
                
            </section></div>
            <div className="page4">
              <p>Contact Us<br/> indianweddingplanner@gmail.com </p>
            </div>
        </div>
            
      </body>
     
    </>
  );
}

export default TwoPartitionLayout;
