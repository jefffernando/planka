import { connect } from 'react-redux';

import selectors from '../selectors';
import Core from '../components/Core';

const mapStateToProps = (state) => {
  const isCoreInitializing = selectors.selectIsCoreInitializing(state);
  const isSocketDisconnected = selectors.selectIsSocketDisconnected(state);
  const currentModal = selectors.selectCurrentModal(state);
  const currentProject = selectors.selectCurrentProject(state);

  return {
    isSocketDisconnected,
    currentModal,
    currentProject,
    isInitializing: isCoreInitializing,
  };
};

export default connect(mapStateToProps)(Core);
