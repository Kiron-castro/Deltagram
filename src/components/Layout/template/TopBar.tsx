
import styled from 'styled-components';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
const TopBarWrapper = styled.div`
border: 1px solid yellow;
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;


#searchtxt{
  
  
  border:solid 3px;
  border-radius:20px;
  width:40%;
  padding-left: 60px;
  background-color:transparent;
  font-style:italic;
  font-size:18px;
  border-radius:5px;
  border-color: #404040;
  height:25px;
  width:25%;

  }
`
const TopBar = () => {
    return(
        <TopBarWrapper>
        
        <input type="text" id="searchtxt" placeholder="Pesquisar..."/>
        <button>
            <FontAwesomeIcon icon={faSearch} />
        </button>
        
        </TopBarWrapper>

    
    )
}

export default TopBar;