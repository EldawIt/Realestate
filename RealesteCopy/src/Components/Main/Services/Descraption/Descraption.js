"use client";
import { Fade } from "react-awesome-reveal";
import "./Descraption.css";
function Descraption() {
  return (
      <div className="box-descraption">
    <Fade direction="top-right">
    <h3>Tanta Real Estate - شريكك الموثوق في رحلة البحث عن عقارك في طنطا!</h3>
    <p>نقدم خدمات شاملة تشمل</p>
    </Fade>
    
    <Fade direction="top-right">
    <span className="title"> بيع وشراء العقارات</span>
    <p>
      نساعدك في العثور على العقار المثالي الذي يلبي احتياجاتك وميزانيتك، سواء
      كنت تبحث عن شقة أو منزل أو أرض أو عقار تجاري.
    </p>
    </Fade>
    <Fade direction="top-right">
    <span className="title">تأجير العقارات</span>
    <p>
      نساعدك في العثور على شقة للإيجار تناسب احتياجاتك وميزانيتك في مدينة طنطا
      والمناطق المحيطة.
    </p>
    </Fade>
    <Fade direction="top-right">
    <span className="title"> الاستشارات العقارية</span>
    <p>
      نقدم خدمات استشارية مجانية لمساعدتك في اتخاذ القرارات العقارية الصحيحة.
      الإدارة القانونية: نتولى جميع الإجراءات القانونية اللازمة لضمان عملية
      سلسة وآمنة
    </p>
    </Fade>
    
    </div>  
  );
}

export default Descraption;

{/* <div className="box-descraption">
<Fade  direction="top-down">
<h3>Tanta Real Estate - شريكك الموثوق في رحلة البحث عن عقارك في طنطا!</h3>
</Fade>
<p>نقدم خدمات شاملة تشمل</p>
<Fade  direction="top-down">
<span className="title"> بيع وشراء العقارات</span>
</Fade>
<Fade  direction="top-down">
<p>
  نساعدك في العثور على العقار المثالي الذي يلبي احتياجاتك وميزانيتك، سواء
  كنت تبحث عن شقة أو منزل أو أرض أو عقار تجاري.
</p>
</Fade>
<Fade  direction="top-down">
<span className="title">تأجير العقارات</span>
<p>
  نساعدك في العثور على شقة للإيجار تناسب احتياجاتك وميزانيتك في مدينة طنطا
  والمناطق المحيطة.
</p>
</Fade>
<Fade  direction="top-down">
<span className="title"> الاستشارات العقارية</span>
<p>
  نقدم خدمات استشارية مجانية لمساعدتك في اتخاذ القرارات العقارية الصحيحة.
  الإدارة القانونية: نتولى جميع الإجراءات القانونية اللازمة لضمان عملية
  سلسة وآمنة
</p>
</Fade>





</div> */}