import React, { useEffect } from "react";
import ListPhotos from "../../Components/ListPhotos/ListPhotos";
import { useProtectedPage } from "../../Hooks/useProtectedPage";
import { getList } from "../../Hooks/useRequest";
import * as Style from "./styled";

const List = () => {
  useProtectedPage();
  const [dataList, setDataList] = React.useState([]);
  const [breend, setBreend] = React.useState("chihuahua");
  const [currentPage, setCurrentPage] = React.useState(0);
  const itensPage = 9;

  const pages = Math.ceil(dataList.length / itensPage);
  const startIndex = currentPage * itensPage;
  const endIndex = startIndex + itensPage;
  const currentItens = dataList.slice(startIndex, endIndex);
  const Max_item = 5;
  const Max_left = (Max_item - 1) / 2;
  const first = Math.max(currentPage - Max_left, 1);

  useEffect(() => {
    getList(setDataList, breend);
  }, [breend]);

  useEffect(() => {}, []);

  const onPageChange = (page: number) => {
    setCurrentPage(page - 1);
  };

  return (
    <Style.MainContainer>
      <Style.Header>
        <h1>Dog Breend</h1>
        <p>Escolha a raça que deseja visualizar</p>
        <div>
          <Style.Button onClick={() => setBreend("chihuahua")}>
            Chihuahua
          </Style.Button>
          <Style.Button onClick={() => setBreend("husky")}>Husky</Style.Button>
          <Style.Button onClick={() => setBreend("pug")}>Pug</Style.Button>
          <Style.Button onClick={() => setBreend("labrador")}>
            Labrador
          </Style.Button>
        </div>
      </Style.Header>
      <Style.ContainerList>
        {dataList.length > 0 &&
          currentItens.map((dog, index) => {
            return <ListPhotos dog={dog} key={index} />;
          })}
      </Style.ContainerList>
      <Style.ListPagination>
        <Style.Button
          onClick={() => onPageChange(currentPage)}
          disabled={currentPage === 0}
        >
          ᐸ
        </Style.Button>

        {Array.from({ length: Math.min(Max_item, pages) })
          .map((e, index) => index + first)
          .map((page) => {
            return (
              <Style.Button
                key={page}
                onClick={() => onPageChange(page)}
                className={
                  page - 1 === currentPage ? "pagination--active" : null
                }
              >
                {page}
              </Style.Button>
            );
          })}
        <Style.Button
          onClick={() => onPageChange(currentPage + 2)}
          disabled={currentPage === pages - 1}
        >
          ᐳ 
        </Style.Button>
      </Style.ListPagination>
    </Style.MainContainer>
  );
};

export default List;
