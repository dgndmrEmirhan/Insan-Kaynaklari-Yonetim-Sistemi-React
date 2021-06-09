import React from 'react'
import './Header.css'
import {
    Button,
    Divider,
    Grid,
    Header,
    Icon,
    Search,
    Segment,
    Image,
    GridColumn
  } from 'semantic-ui-react'

  
export default function Headerr() {
    return (
        <div>
 <Segment  inverted placeholder  style={{ margin: "3em -2em 3em", padding :"30pm",height:"200px"}}
 >
    <Grid  stackable textAlign='center'>
    

      <Grid.Row verticalAlign='middle'>
      
      <Grid.Column width={4}>
      <Image src={"../../../assets/employer.png"} size='medium' rounded />
      </Grid.Column>
      <Grid.Column width={3}>
          <Header icon>
            <Icon name='world' />
            Find City
          </Header>

          <Search placeholder='Search cities...' />
        </Grid.Column>

        <Grid.Column width={3}>
          <Header icon>
            <Icon name='search' />
            Find Job
          </Header>
          <Search placeholder='Search job adverts...' />
        </Grid.Column>
        <Grid.Column width={1}>

        </Grid.Column>
      </Grid.Row>
      
    </Grid>
  </Segment>
        </div>
    )
}