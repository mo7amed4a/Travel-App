import SubHeader from "../../components/Sub-Header";
import PackageComponent from "../../components/packageComponent";
import useFetch from "../../hooks/useFetch";
import Loading from "../../components/global/Loading";
import ErrorComponent from "../../components/global/Error";
import EmptyData from "../../components/global/empty";
import PaginationApp from "../../components/pagination";
import { useState } from "react";
import { Link } from "react-router-dom"; 

export default function PackagesPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState(''); // Initially set to empty string

  const {
    data: g,
    loading: lg,
    error: ej,
  } = useFetch(`/package/allCategorys`);
  console.log(g);

  const {
    data,
    loading,
    error,
  } = useFetch(`/package?pageNumber=${currentPage}&category=${search}&PACKAGE_PER_PAGE=10`);

  const handleCategoryClick = (category) => {
    setSearch(category); 
    setCurrentPage(1); 
  };

  return (
    <div>
      <div className="space-y-10 relative">
        <SubHeader title="Tour Packages" />

        <div>
          {lg ? (
            <Loading />
          ) : g && g.data && g.data.categories && g.data.categories.length > 0 ? (
            <ul className="pl-5 flex text-center gap-9 items-center">
              {g.data.categories.map((category, index) => (
                <li
                  key={index}
                  className="cursor-pointer bg-secondary text-white rounded-md p-3"
                  onClick={() => handleCategoryClick(category)} 
                >
                  {category}
                </li>
              ))}
            </ul>
          ) : (
            <EmptyData message="No categories found." />
          )}
        </div>

        {loading && <Loading />}
        {data && !loading ? (
          <section>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-3 gap-y-8 px-4 mx-auto max-w-[1100px]">
              {data?.data?.packages?.map((item, index) => (
                <Link to={`/package/${item.id}`} key={index}>
                  <PackageComponent packageItem={item} />
                </Link>
              ))}
            </div>
            <PaginationApp
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              totalPages={data.totalPages}
            />
          </section>
        ) : (
          !loading && <EmptyData text="No packages found" />
        )}
        {error && <ErrorComponent error={error} small />}
      </div>
    </div>
  );
}
