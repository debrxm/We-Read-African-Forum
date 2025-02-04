import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectLatestPosts } from '../../redux/forum/forum.selector';
import RecentTopicPreview from '../RecentTopicPreview/RecentTopicPreview'
import './SideBarRecentPosts.scss';

const SideBarRecentPosts = ({ latestTopics }) => {
  return (
    <div id='SideBarRecentPosts'>
      <h4>Recent Posts</h4>
      {latestTopics.filter((item, index) => index < 10).map((item, index) => <RecentTopicPreview key={index} data={item.latest_post} />)}
    </div>
  )
}
const mapStateToProps = createStructuredSelector({
  latestTopics: selectLatestPosts,
});


export default withRouter(connect(mapStateToProps)(SideBarRecentPosts));