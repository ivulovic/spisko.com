import { useContext } from 'react';

import useAppImplementation from '@implementation/app';
import useWishlistImplementation from '@implementation/wishlist';
import { useDispatch } from '@service';

import Context from './context';
import scopeSettings, { AppsScope } from './settings';

const useAppController = (scope) => {
  const dispatch = useDispatch();
  const app = useAppImplementation();
  const getPayload = (params: any = null) => ({
    controller: scopeSettings[scope],
    params,
  });
  const onCreate = (params: any) => {
    const payload = getPayload(params);
    dispatch(app.actions.create(payload));
  };
  const onLoadAll = (params: any) => {
    const payload = getPayload(params);
    dispatch(app.actions.loadAll(payload));
  };
  const onLoadById = (params: any) => {
    const payload = getPayload(params);
    dispatch(app.actions.loadById(payload));
  };
  const onRemove = (params: any) => {
    const payload = getPayload(params);
    dispatch(app.actions.remove(payload));
  };

  return {
    controller: scopeSettings[scope],
    implementation: {
      app,
    },
    methods: {
      onCreate,
      onLoadAll,
      onLoadById,
      onRemove,
    },
  };
};

export const useWishlistController = () => {
  const dispatch = useDispatch();
  const scope = useAppController(AppsScope.Wishlist);
  const wishlist = useWishlistImplementation();

  const getPayload = (params: any = null) => ({
    controller: scopeSettings[AppsScope.Wishlist],
    appScope: scope,
    params,
  });

  const onFetch = (params: any) => {
    const payload = getPayload(params);
    dispatch(wishlist.actions.fetch(payload));
  };

  scope.implementation.wishlist = wishlist;
  scope.methods.onFetch = onFetch;

  return scope;
};

export const useNotesController = () => {
  const dispatch = useDispatch();
  const directory = useAppController(AppsScope.NotesDirectory);
  const notes = useAppController(AppsScope.Notes);

  const getPayload = (params: any = null, scope) => ({
    controller: scopeSettings[scope],
    params,
  });

  const onLoadDirectories = (params: any) => {
    const payload = getPayload(params, AppsScope.NotesDirectory);
    dispatch(directory.implementation.app.actions.loadAll(payload));
  };
  const onLoadDirectory = (params: any) => {
    const payload = getPayload(params, AppsScope.NotesDirectory);
    dispatch(directory.implementation.app.actions.loadById(payload));
  };
  const onCreateDirectory = (params: any) => {
    const payload = getPayload(params, AppsScope.NotesDirectory);
    dispatch(directory.implementation.app.actions.create(payload));
  };
  const onUpdateDirectory = (params: any) => {
    const payload = getPayload(params, AppsScope.NotesDirectory);
    dispatch(directory.implementation.app.actions.update(payload));
  };
  const onRemoveDirectory = (params: any) => {
    const payload = getPayload(params, AppsScope.NotesDirectory);
    dispatch(directory.implementation.app.actions.remove(payload));
  };
  const onLoadNotes = (params: any) => {
    const payload = getPayload(params, AppsScope.Notes);
    dispatch(notes.implementation.app.actions.loadAll(payload));
  };
  const onRemoveNote = (params: any) => {
    const payload = getPayload(params, AppsScope.Notes);
    dispatch(notes.implementation.app.actions.remove(payload));
  };
  const onLoadNote = (params: any) => {
    const payload = getPayload(params, AppsScope.Notes);
    dispatch(notes.implementation.app.actions.loadById(payload));
  };
  const onCreateNote = (params: any) => {
    const payload = getPayload(params, AppsScope.Notes);
    dispatch(notes.implementation.app.actions.create(payload));
  };
  const onUpdateNote = (params: any) => {
    const payload = getPayload(params, AppsScope.Notes);
    dispatch(notes.implementation.app.actions.update(payload));
  };

  return {
    implementation: {
      app: directory.implementation.app,
    },
    methods: {
      onLoadDirectory,
      onLoadDirectories,
      onCreateDirectory,
      onUpdateDirectory,
      onRemoveDirectory,
      //
      onLoadNote,
      onLoadNotes,
      onCreateNote,
      onRemoveNote,
      onUpdateNote,
    },
  };
};

export const useClassroomController = () => {
  const dispatch = useDispatch();
  const subject = useAppController(AppsScope.ClassroomSubject);
  const topic = useAppController(AppsScope.ClassroomTopic);

  const getPayload = (params: any = null, scope) => ({
    controller: scopeSettings[scope],
    params,
  });

  const onLoadSubjects = (params: any) => {
    const payload = getPayload(params, AppsScope.ClassroomSubject);
    dispatch(subject.implementation.app.actions.loadAll(payload));
  };
  const onLoadSharedSubjects = (params: any) => {
    const payload = getPayload(params, AppsScope.ClassroomSubject);
    dispatch(subject.implementation.app.actions.loadById(payload));
  };
  const onLoadSubject = (params: any) => {
    const payload = getPayload(params, AppsScope.ClassroomSubject);
    dispatch(subject.implementation.app.actions.loadById(payload));
  };
  const onCreateSubject = (params: any) => {
    const payload = getPayload(params, AppsScope.ClassroomSubject);
    dispatch(subject.implementation.app.actions.create(payload));
  };
  const onUpdateSubject = (params: any) => {
    const payload = getPayload(params, AppsScope.ClassroomSubject);
    dispatch(subject.implementation.app.actions.update(payload));
  };
  const onRemoveSubject = (params: any) => {
    const payload = getPayload(params, AppsScope.ClassroomSubject);
    dispatch(subject.implementation.app.actions.remove(payload));
  };
  const onLoadTopics = (params: any) => {
    const payload = getPayload(params, AppsScope.ClassroomTopic);
    dispatch(topic.implementation.app.actions.loadAll(payload));
  };
  const onRemoveTopic = (params: any) => {
    const payload = getPayload(params, AppsScope.ClassroomTopic);
    dispatch(topic.implementation.app.actions.remove(payload));
  };
  const onLoadTopic = (params: any) => {
    const payload = getPayload(params, AppsScope.ClassroomTopic);
    dispatch(topic.implementation.app.actions.loadById(payload));
  };
  const onCreateTopic = (params: any) => {
    const payload = getPayload(params, AppsScope.ClassroomTopic);
    dispatch(topic.implementation.app.actions.create(payload));
  };
  const onUpdateTopic = (params: any) => {
    const payload = getPayload(params, AppsScope.ClassroomTopic);
    dispatch(topic.implementation.app.actions.update(payload));
  };

  return {
    implementation: {
      app: subject.implementation.app,
    },
    methods: {
      onLoadSubject,
      onLoadSubjects,
      onCreateSubject,
      onUpdateSubject,
      onRemoveSubject,
      onLoadSharedSubjects,
      //
      onLoadTopic,
      onLoadTopics,
      onCreateTopic,
      onRemoveTopic,
      onUpdateTopic,
    },
  };
};

const useAppControllerScope = () => {
  const ctx = useContext(Context);
  if (!ctx) {
    throw new Error('You are using AppContext out of AppContext.Provider');
  }
  return ctx;
};

export const useWishlistControllerScope = useAppControllerScope;
export const useNotesControllerScope = useAppControllerScope;
export const useClassroomControllerScope = useAppControllerScope;
