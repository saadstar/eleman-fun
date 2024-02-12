
const Regions = () => {
  return (
    <>
      <section id='regions'>
        <h1>العمليات الخاصه بنا</h1>
        <p>رائدين في العمليات الاتيه حيث انه لدينا خبره تفوق العشر سنوات متخصصون بهم!</p>
        <div className="region_container">
        <div className="card">
         <img src="/region1.jpg" alt="mountains" />
         <h2>شبكات صرف صحي</h2>
         <p><span>+40</span> عمليه</p> 
        </div>
        <div className="card">
        <img src="/region2.jpg" alt="coastline" />
         <h2>البناء والتشطيبات الكامله</h2>
         <p><span>52</span> عمليه</p> 
        </div>
        </div>
        </section> 
    </>
  )
}

export default Regions
