import Link from "next/link";
import "./Dashboard.css";
const Sidebar = () => {
  return (
    <div className="sidebar">
      {/* <Link href="/Dashboard/Acounts" className='linkes'>الحسابات</Link> */}
      <Link href="/Dashboard/Requestdepartment" className="linkes">
        مراجعه طلبات الشقق
      </Link>
      <Link href="/Dashboard/Requetshops" className="linkes">
        مرجعه طلبات المحلات
      </Link>
      <Link href="/Dashboard/Requestspaces" className="linkes">
        مرجعه طلبات اراضي
      </Link>
      <Link href="/Dashboard/AddDepartment" className="linkes">
        اضافه شقه
      </Link>
      <Link href="/Dashboard/AddShops" className="linkes">
        اضافه محل
      </Link>
      <Link href="/Dashboard/Addspaces" className="linkes">
        اضافه ارض
      </Link>
    </div>
  );
};

export default Sidebar;
