import ModalContainer, {
  loader as modalLoader,
} from "../components/modal/ModalContainer.jsx";
import ModalHeader from "../components/modal/ModalHeader.jsx";
import CustomModalContent from "../components/modal/CustomModalContent.jsx";

export const ModalRoute = [
  {
    path: ":id",
    element: (
      <ModalContainer>
        <ModalHeader
          tag={
            <>
              <span>거래번호</span> - TRX9139873219297a537 -
              <span>매입전 취소</span>
            </>
          }
        />
        {/* 추후 modal 생길 경우 customModal은 추가 생성*/}
        <CustomModalContent />
      </ModalContainer>
    ),
    loader: modalLoader,
  },
];

export default ModalRoute;
