import React, { Component } from 'react'
import '../styles/Main.css'

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class Main extends Component {
    constructor() {
        super()

        this.state = {
            money: localStorage.money,
            level: Number(localStorage.level)
        }

        this.clickSans = this.clickSans.bind(this)
    }

    clickSans() {
        const m = Number(localStorage.money)
        if (m >= 1000000000000000) return
        if (m < 0) {
            localStorage.money = '0'
            return
        }
        
        localStorage.money = String(m + Number(localStorage.add))

        this.setState({
            money: localStorage.money
        })
    }

    render(){
        return (
            <>
                <div>
                    {this.state.money >= 200 * this.state.level ? (
                        <Button className = "levelUp" variant="contained" color="primary" onClick = {() => {
                            if (this.state.level < 5) {
                                this.setState({
                                    level: this.state.level + 1,
                                    money: this.state.money - 200 * this.state.level
                                })

                                localStorage.level = this.state.level
                                localStorage.money = this.state.money
                            }
                        }}>
                          Level up
                        </Button>
                    ) : null}
                </div>

                <img onClick = {this.clickSans} src = {process.env.PUBLIC_URL + `/images/level${this.state.level}.gif`} alt = 'Touch This!' />

                <Card className = 'money'>
                    <CardContent>
                        <Typography variant = 'h5' component = 'h2'>
                            {this.state.money} CLICKS
                        </Typography>
                    </CardContent>
                </Card>
            </>
        )
    }
}

export default Main