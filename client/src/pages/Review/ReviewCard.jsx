import React from 'react';
import {observer} from "mobx-react-lite";
import styled from 'styled-components'
import {NavLink} from "react-router-dom";
import {AiOutlineUser} from "react-icons/ai";
import moment from 'moment';
import 'moment/locale/ru';

const Container = styled.div`
  line-height: 1.3;

  font-size: 16px;
  color: #2f3235;
  box-sizing: border-box;
  padding: 15px 0 15px 0px;
`

const Wrapper = styled.div`
  line-height: 1.3;

  font-size: 16px;
  color: #2f3235;
  box-sizing: border-box;
  padding-left: 80px;
`

const Profile = styled.div`
  line-height: 1.3;

  font-size: 16px;
  color: #2f3235;
  box-sizing: border-box;
  float: left;
  margin-left: -78px;
  height: 64px;
`

const Header = styled.header`

  font-size: 16px;
  box-sizing: border-box;
  margin: -4px 0 4px;
  padding: 0 !important;
  word-break: break-all;
  line-height: 1.3;
  color: #2f3235;
`

const Description = styled.div`
  line-height: 1.3;

  font-size: 16px;
  color: #2f3235;
  box-sizing: border-box;
`

const ProfileLink = styled(NavLink)`
  line-height: 1.3;

  font-size: 16px;
  box-sizing: border-box;
  color: #ee3942;
  outline: none;
`

const Img = styled.img`
  line-height: 1.3;

  font-size: 16px;
  color: #ee3942;
  box-sizing: border-box;
  border: 0;
  outline: none;
  width: 64px;
  height: 64px;
  box-shadow: 0 1px 3px rgba(0, 40, 60, .2);
`
const Author = styled.div`
  word-break: break-all;
  line-height: 1.3;
  box-sizing: border-box;
  font-weight: bolder;
  display: inline-block;
  font-size: 14px;

  color: #75787a;
`

const AuthorLink = styled(NavLink)`
  word-break: break-all;
  line-height: 1.3;
  font-weight: bolder;
  font-size: 14px;

  box-sizing: border-box;
  outline: none;
  color: #75787a;
  cursor: pointer;
  text-decoration: none;
  background: none;
  border-bottom: none;
`
const AuthorName = styled.span`
  margin-right: 5px;
  word-break: break-all;
  line-height: 1.3;
  font-weight: bolder;
  font-size: 14px;

  cursor: pointer;
  box-sizing: border-box;
  text-decoration: none;
  color: #75787a;
  border-bottom: 1px solid rgba(117, 120, 122, .25);
`

const Time = styled.time`

  word-break: break-all;
  line-height: 1.3;
  box-sizing: border-box;
  display: inline-block;
  font-size: 13px;
  color: #a6a8aa;
  text-indent: 0;
`

const TimeLink = styled(NavLink)`

  word-break: break-all;
  line-height: 1.3;
  font-size: 13px;
  text-indent: 0;
  box-sizing: border-box;
  color: #a6a8aa;
  cursor: pointer;
  text-decoration: none;
  outline: none;
  border-bottom: 1px dashed rgba(166, 168, 170, .25);
`
const UserMessage = styled.div`
  line-height: 1.3;
  font-size: 16px;
  box-sizing: border-box;
  word-wrap: break-word;
  hyphens: auto;
   
  margin: 10px 0;
  color: #2f3235;
  word-break: break-word;
  display: block;
`


const UserIcon = styled(AiOutlineUser)`
  width: 100%;
  height: 100%;
  color: gray;
`

const ProfileUserImg = styled.div`
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

const ReviewCard = observer((props) => {

    return (
        <Container>
            <Wrapper>
                <Profile>
                    <ProfileUserImg to="">
                        <UserIcon/>
                    </ProfileUserImg>
                </Profile>
                <Header>
                    <Author>
                        <AuthorLink to="">
                            <AuthorName>
                                {props.otziv.username},
                            </AuthorName>
                        </AuthorLink>
                    </Author>
                    <Time>
                        <TimeLink to="">
                            {moment(props.otziv.createdAt).format('D MMMM  в HH:MM')}
                        </TimeLink>
                    </Time>
                </Header>
                <Description>
                    <UserMessage>
                        <p>
                            {props.otziv.description}
                        </p>
                    </UserMessage>
                </Description>
            </Wrapper>
        </Container>
    );
});

export default ReviewCard;