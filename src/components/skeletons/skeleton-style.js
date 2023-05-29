import styled, { css } from 'styled-components'

export const Skeleton = styled.div`
  background-color: #313131;
`

export const SkeletonImage = styled(Skeleton)`
  width: 51px;
  height: 51px;
`

const SceletonMixin = css`
    background-color: #313131;
    height: 19px;
`

export const SceletonSidebarItem = styled.div`${SceletonMixin} width: 250px; height: 150px;`