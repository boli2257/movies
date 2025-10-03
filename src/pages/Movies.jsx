import React from 'react'
import { PageLayout } from '../components/PageLayout'
import { Grid } from '@mui/material'
import { useQuery } from 'react-query'
import { getData } from '../utils'
import { MyCard } from '../components/Mycard'

export const Movies = () => {
  const { data, isLoading, isError, error } = useQuery({ queryKey: ['moviesdata', 'movie'], queryFn: getData })
  data && console.log(data);

  return (
    <PageLayout title='Movies'>
      <Grid container spacing={2} justifyContent='center'>
        {data && data.results.map(obj =>
            <MyCard key={obj.id} {...obj}/>
        )}
      </Grid>
    </PageLayout>
  )
}