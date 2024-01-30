import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`

export const TaskInputContainer = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  height: 100vh;
  width: 35%;
  background-color: #1a171d;
`

export const TaskDisplayContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 20px 10px;
  height: 100vh;
  width: 65%;
  background-color: #000000;
`

export const Heading = styled.h1`
  color: #f3aa4e;
  font-family: 'Roboto';
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 15px;
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  margin: 0px;
`

export const LabelText = styled.label`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 16px;
  margin: 5px;
`

export const Input = styled.input`
  height: 22px;
  width: 100%;
  font-family: 'Roboto';
  font-size: 16px;
  padding: 20px 10px;
  outline: none;
  cursor: pointer;
  margin: 5px;
  margin-bottom: 20px;
`

export const Select = styled.select`
  height: 45px;
  width: 100%;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: normal;
  padding: 10px;
  outline: none;
  cursor: pointer;
  margin: 5px;
  margin-bottom: 20px;
`

export const AddButton = styled.button`
  background-color: #f3aa4e;
  color: #ffffff;
  height: 40px;
  width: 120px;
  border-radius: 5px;
  border: 0px;
  margin-top: 15px;
  outline: none;
  cursor: pointer;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: 500;
`

export const TagsHeading = styled.h1`
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 24px;
  font-weight: 400;
  margin-bottom: 10px;
`

export const NoTaskText = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 20px;
  font-weight: 400;
  margin-top: 100px;
  text-align: center;
`

export const TagsContainer = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  padding-left: 0px;
  margin-top: 5px;
  margin-bottom: 5px;
`

export const TagsButton = styled.button`
  background-color: ${props => (props.isActive ? '#f3aa4e' : 'transparent')};
  border: 1px solid #f3aa4e;
  border-radius: 20px;
  height: 25px;
  padding-left: 10px;
  padding-right: 10px;
  margin: 5px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: '500';
  cursor: pointer;
  outline: none;
  text-align: center;
`

export const TagListItem = styled.li`
  list-style-type: none;
`

export const TasksContainer = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding-left: 0px;
  //   align-items: center;
  width: 100%;
  height: 100%;
  //   margin: 5px;
`
export const TagsCategory = styled.p`
  background-color: #f3aa4e;
  border: 0px;
  border-radius: 20px;
  height: 14px;
  padding: 12px;
  margin: 5px;
  color: #131213;
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ListItem = styled.li`
  list-style-type: none;
  background-color: #1a171d;
  height: 15px;
  width: 98%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 22px 20px;
  margin: 5px;
`

export const TaskName = styled.p`
  color: #f1f5f9;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: normal;
  overflow-x: auto;
`
