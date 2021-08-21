
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch, faBars } from '@fortawesome/free-solid-svg-icons'
const TopBarWrapper = styled.div`
border: 1px solid #404040;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
background-color: #00334d;
padding: 8px 0;

.icon-top {
    font-size: 26px;
    position: absolute;
    left: 15px;
}

#searchtxt{ 
  border:solid 0.5px;
  border-radius:20px;
  width:40%;
  padding-left: 60px;
  background-color:transparent;
  font-style:italic;
  font-size:18px;
  border-radius:5px;
  border-color:#7a7878;
  height:25px;
  width:25%;
  }
#topSearchBtn {
    margin-left: 20px;
}


@media(min-width: 420px) {
    .icon-top {
        display: none;
    }
}
`


const TopBar = ({onClickMenu}:{onClickMenu:()=>void}) => {
    return(
        <TopBarWrapper>
        <FontAwesomeIcon onClick={onClickMenu} className="icon-top" icon={faBars} />  
        <input type="text" id="searchtxt" placeholder="Pesquisar..."/>
        <button type="button" id="topSearchBtn">
            <FontAwesomeIcon icon={faSearch} />
        </button>       
        </TopBarWrapper>
    )
}

export default TopBar;