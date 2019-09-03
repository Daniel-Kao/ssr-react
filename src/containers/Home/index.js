import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';
import { actions } from './store';

const Home = props => {
  useEffect(() => {
    props.getList();
  }, []);
  return (
    <div>
      <Header />
      <div>
        {props.newsList.map(item => {
          return <div key={item.id}>{item.title}</div>;
        })}
      </div>
    </div>
  );
};

Home.loadData = store => {
  return store.dispatch(actions.getList());
};

const mapStateToProps = state => ({
  newsList: state.home.newsList
});

const mapDispatchToProps = dispatch => ({
  getList() {
    dispatch(actions.getList());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
