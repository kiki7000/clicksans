import React from 'react';
import '../styles/Store.css'

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { useSnackbar } from 'notistack';

import StoreItem from '../components/StoreItem'

const Store = () => {
    const { enqueueSnackbar } = useSnackbar();
    const items = [
        {
            name: '파피루스 쿠폰',
            clicks: '100',
            effect: '현재 클릭의 50% 더하기',
            onBuy: () => {
                const m = Number(localStorage.money)
                const clicks = 100
    
                if (m < clicks) {
                    enqueueSnackbar('클릭 수가 부족합니다', {
                        variant: "error"
                    })
                    return
                }
    
                localStorage.money = String(Math.round((m - clicks) * 1.5))
                enqueueSnackbar('성공적으로 구매했습니다', {
                    variant: "success"
                })
            }
        },
    
        {
            name: '와! 주문',
            clicks: '500',
            effect: '현재 클릭의 2배 더하기',
            onBuy: () => {
                const m = Number(localStorage.money)
                const clicks = 500
    
                if (m < clicks) {
                    enqueueSnackbar('클릭 수가 부족합니다', {
                        variant: "error"
                    })
                    return
                }
    
                localStorage.money = String(Math.round((m - clicks) * 3))
                enqueueSnackbar('성공적으로 구매했습니다', {
                    variant: "success"
                })
            }
        },
    
        {
            name: '머멍고야이 키우기',
            clicks: '100',
            effect: '1회클릭수 1 증가',
            onBuy: () => {
                const m = Number(localStorage.money)
                const clicks = 100
    
                if (m < clicks) {
                    enqueueSnackbar('클릭 수가 부족합니다', {
                        variant: "error"
                    })
                    return
                }
    
                localStorage.money = String(m - clicks)
                localStorage.add = String(Number(localStorage.add) + 1)
                enqueueSnackbar('성공적으로 구매했습니다', {
                    variant: "success"
                })
            }
        },
    
        {
            name: '사기꾼과 거래',
            clicks: '1000',
            effect: '1회클릭수 2배',
            onBuy: () => {
                const m = Number(localStorage.money)
                const clicks = 1000
    
                if (m < clicks) {
                    enqueueSnackbar('클릭 수가 부족합니다', {
                        variant: "error"
                    })
                    return
                }
    
                localStorage.money = String(m - clicks)
                localStorage.add = String(Number(localStorage.add) * 2)
                enqueueSnackbar('성공적으로 구매했습니다', {
                    variant: "success"
                })
            }
        },
    ]

    return (
        <>  
            <h2>STORE</h2>

            <TableContainer className = 'table' component={Paper}>
                <Table aria-label="simple table">
                    <TableHead className = "tablehead">
                        <TableRow>
                            <TableCell>Item Name</TableCell>
                            <TableCell align="right">Need Click Count</TableCell>
                            <TableCell align="right">Effect</TableCell>
                            <TableCell align="right">Buy</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {items.map(x => (<StoreItem name = {x.name} clicks = {x.clicks} effect = {x.effect} onBuy = {x.onBuy} />))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default Store