import styled from 'styled-components'
import Avatar from '../../Avatar';

const TopMainWrapper = styled.div`
border: 1px solid #969191;
width: 100%;
box-sizing: border-box;

@media(min-width: 420px) {
    padding: 5px 20px;
}

.topMainInnerWrapper {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
}
.topMainInnerWrapper2 {
    margin-top: 20px;
}
.btn-post {
    border: 1px solid transparent;
    background-color:#bebebe;
    color: black;
    padding: 5px 10px;
    border-radius: 5px;
}
input{
    background-color: transparent;
    border-radius: 25px;
    border-color: #818080;
    width: 75%;
    padding: 5px 3px 5px 8px;
    text-align: center;
}
:placeholder{
    color:whitesmoke;
    text-align: center;
    text-decoration: overline;

}
`

const TopMain = () => {
    return(
        <TopMainWrapper>
            <div className="topMainInnerWrapper">
                <input type="text" placeholder="What's going on ?" />
                <Avatar userName="Kiron" />
            </div>

            <div className="topMainInnerWrapper topMainInnerWrapper2">

                <button className="btn-post" type="button">POSTAR</button>
            </div>

        </TopMainWrapper>
    )
}

export default TopMain;