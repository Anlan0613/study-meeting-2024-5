// import文を追加
import React, {useState} from 'react';
import styled from "styled-components";

// コンポーネントの基本形
export const Modal = () => {
    // useStateを追加，showModalが状態を表す。setShowModalがshowModalを更新する関数。
    // 　デフォルトでshowModalはtrue
    const [showModal, setShowModal] = useState(true);　　

    const handleYesClick = () => {
        window.location.href = "https://example.com";
    };
    
    const handleNoClick = () => {
        setShowModal(false);
    };

    return (
    <StyledModal showModal={showModal}>
        <StyledText>リンク先に飛びますか？</StyledText>
        <StyledButtons>
            <StyledButton onClick={handleYesClick}>Yes</StyledButton>
            <StyledButton onClick={handleNoClick}>No</StyledButton>
        </StyledButtons>
    </StyledModal>
    );
};

// StyledModalの追加
const StyledModal = styled.div` //divはdivタグのdiv
  width: fit-content;
  display: ${(props) =>
    props.showModal ? "block" : "none"};
  padding:0 10px 10px;
  background-color: #b6e1fb;
  color: #292c2d;
  border: 1px solid #000;
  border-radius: 10px;
`;

// StyledTextの追加
const StyledText = styled.p` //pはpタグのp
  font-weight: 700;
`;

// StyledButtonsの追加
const StyledButtons = styled.div` //buttonはbuttonタグのbutton
  display: flex;
  gap: 10px;
  justify-content: center;
`;

// StyledButtonの追加
const StyledButton = styled.button` //buttonはbuttonタグのbutton
  border-radius: 10px;
  background-color: white;
  &:hover {
    background-color: #dae1e8;
  }
`;

