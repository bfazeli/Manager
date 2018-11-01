import React, {Component} from 'react'
import {connect} from 'react-redux'
import {employeeUpdate} from '../actions'
import {Button, CardSection, Card, Input} from './commons'

class EmployeeCreate extends Component {
    
    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label= "Name"
                        placeholder="Bijan"
                        value = {this.props.name}
                        onChangeText = {value => this.props.employeeUpdate({prop: 'name', value})}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label= "Phone"
                        placeholder="562-090-1010"
                        value = {this.props.phone}
                        onChangeText = {value => this.props.employeeUpdate({prop: 'phone', value})}
                    />
                </CardSection>
                <CardSection>
                    
                </CardSection>
                <CardSection>
                    <Button>
                        Create
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm

    return {name, phone, shift}
}

export default connect(mapStateToProps, {employeeUpdate})(EmployeeCreate)