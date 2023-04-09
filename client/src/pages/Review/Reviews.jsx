import React, {useContext, useEffect, useRef, useState} from 'react';
import styled from "styled-components";
import MyButton from "../../UI/MyButton/MyButton";
import {AiOutlineUser} from "react-icons/ai";
import {Context} from "../../index";
import {createOtziv, fetchOtzivsOneExursion} from "../../http/reviewAPI";
import useInput from "../../hooks/useInput";
import ReviewCard from "./ReviewCard";

const Comments = styled.div`
  line-height: 1.3;

  font-size: 16px;
  color: #2f3235;
  box-sizing: border-box;
  border-top: 1px solid #e6e8ea;
  position: relative;
  padding: 15px 0px 30px;

`
const Header = styled.header`

  font-size: 16px;
  box-sizing: border-box;
  padding: 15px 0 0;
  color: #2f3235;
`
const H2 = styled.h2`
  box-sizing: border-box;
  color: #2f3235;
  margin-top: 0;
  position: relative;

  font-weight: 700;
  font-size: 24px;
  margin-bottom: 16px;
`
const Span = styled.span`
  color: #2f3235;
  box-sizing: border-box;
  font-size: 24px;

  font-weight: 400;
  margin-left: 5px;
`
const Container = styled.form`
  line-height: 1.3;

  font-size: 16px;
  color: #2f3235;
  box-sizing: border-box;
  clear: both;
  padding: 10px 0 15px 78px;
  position: relative;

`
const ProfileImg = styled.div`
  line-height: 1.3;

  font-size: 16px;
  color: #2f3235;
  box-sizing: border-box;
  float: left;
  margin-left: -78px;
  height: 64px;

`
const UserProfileImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1.3;

  font-size: 16px;
  color: #2f3235;
  box-sizing: border-box;
  border: 0;
  width: 64px;
  height: 64px;
  box-shadow: 0 1px 3px rgba(0, 40, 60, .2);
`
const UserIcon = styled(AiOutlineUser)`
  width: 100%;
  height: 100%;
  color: gray;
`
const ContainerTextArea = styled.div`
  line-height: 1.3;

  font-size: 16px;
  color: #2f3235;
  box-sizing: border-box;
  position: relative;
`
const TextArea = styled.textarea`
  box-sizing: border-box;
  font-family: inherit;
  min-height: 64px;
  line-height: 20px;
  max-width: 100%;
  width: 840px;
  margin: 0;
  font-size: 14px;
  border-radius: 3px;
  overflow: hidden;
  outline: none;
  padding: 7px 10px;
  border: 1px solid #e6e8ea;
  overflow-x: hidden;
  overflow-wrap: break-word;
  resize: horizontal;
  height: 300.1333px;
`

const Button = styled(MyButton)`
  width: 840px;
  background: black;
  :hover {
    filter: brightness(0.6);
  }
`


const Reviews = ({title, id}) => {
    const ref = useRef()
    const {user} = useContext(Context)
    const description = useInput('', {isEmpty: true})
    const [otzivs, setOtzivs] = useState([])

    useEffect(() => {
        fetchOtzivsOneExursion(id)
            .then(data => setOtzivs(data))
    }, [])

    const addOtziv = async (en) => {
        try {
            en.preventDefault()
            await createOtziv({description: description.value, exursionId: id, username: user.User.username})
                .then(() => {
                    setOtzivs([
                        ...otzivs,
                        {description: description.value, exursionId: id, username: user.User.username}
                    ])
                    description.value = ""
                    ref.current.value = ''
                })
        } catch (e) {
            alert(e)
        }
    }

    return (
        <div>
            <Comments>
                <Header>
                    <H2>Отзывы
                        <Span>
                            о выставке "{title}"
                        </Span>
                    </H2>
                </Header>
                <Container>
                    <ProfileImg>
                        <UserProfileImg>
                            <UserIcon/>
                        </UserProfileImg>
                    </ProfileImg>
                    <ContainerTextArea>
                        <TextArea
                            ref={ref}
                            value={description.value}
                            onChange={e => description.onChange(e)}
                            onBlur={e => description.onBlur(e)}
                        />
                    </ContainerTextArea>
                    <Button
                        disabled={!description.inputValid}
                        onClick={addOtziv}
                    >
                        Отправить
                    </Button>
                </Container>
            </Comments>

            {otzivs.map(otziv =>
                <ReviewCard key={otziv.id} otziv={otziv}/>
            )}
        </div>

    )
}

export default Reviews;