import React, {Component} from 'react'
import {Button, CardSection, Card, Input} from './commons'

class EmployeeCreate extends Component {
    render() {
        return(
            <Card>
                <CardSection>
                    <Input
                        label= "Name"
                        placeholder="Bijan"
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label= "Phone"
                        placeholder="562-090-1010"
                    />
                </CardSection>
                <CardSection>
                    
                </CardSection>
                <CardSection>
                    <Button>
                        Save
                    </Button>
                </CardSection>
            </Card>
        )
    }
}

export default EmployeeCreate