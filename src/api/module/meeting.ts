import request from '@/utils/axios';
import { IResponseType } from '.';
import { Query, NewMeeting, MeetingList, NewMeetingReply, ProgressReply, UpdateStatus, MeetingFlowItemReq, ThinkingPresets, DiscussionPresets, InputData, ThinkingData, DiscussionData, ProcessingData, OutputData} from '@/types/meeting';

export const history = (data: Query) => {
  return request<IResponseType<MeetingList>>({
    url: '/api/meeting/history',
    method: 'get',
    data: data
  });
}

export const newMeeting = (data: NewMeeting) => {
  return request<IResponseType<NewMeetingReply>>({
    url: '/api/meeting/newmeeting',
    method: 'post',
    data: data
  })
}

export const progress = (meetingId: string) => {
  return request<IResponseType<ProgressReply>>({
    url: '/api/meeting/progress?meetingId=' + meetingId,
    method: 'get'
  })
}

export const start = async (data: UpdateStatus) => {
  return await request<IResponseType>({
    url: '/api/meeting/start',
    method: 'put',
    data: data
  })
}

export const end = (data: UpdateStatus) => {
  return request<IResponseType>({
    url: '/api/meeting/end',
    method: 'put',
    data: data
  })
}

export const getInputData = (meetingId: string, flowItemId: string) => {
  return request<IResponseType<InputData>>({
    url: '/api/meeting/getInputData?meetingId=' + meetingId + '&flowItemId=' + flowItemId,
    method: 'get'
  })
}

export const submitInput = async (data: MeetingFlowItemReq) => {
  return await request<IResponseType>({
    url: '/api/meeting/submitInput',
    method: 'put',
    data: data
  })
}

export const getThinkingData = (meetingId: string, flowItemId: string) => {
  return request<IResponseType<ThinkingData>>({
    url: '/api/meeting/getThinkingData?meetingId=' + meetingId + '&flowItemId=' + flowItemId,
    method: 'get'
  })
}

export const saveThinkingPresets = (data: ThinkingPresets) => {
  return request<IResponseType>({
    url: '/api/meeting/saveThinkingPresets',
    method: 'post',
    data: data
  })
}

export const getDiscussionData = (meetingId: string, flowItemId: string) => {
  return request<IResponseType<DiscussionData>>({
    url: '/api/meeting/getDiscussionData?meetingId=' + meetingId + '&flowItemId=' + flowItemId,
    method: 'get'
  })
}


export const saveDiscussionPresets = (data: DiscussionPresets) => {
  return request<IResponseType>({
    url: '/api/meeting/saveDiscussionPresets',
    method: 'post',
    data: data
  })
}

export const discussAndQuiz = (data: MeetingFlowItemReq) => {
  return request<IResponseType>({
    url: '/api/meeting/discussAndQuiz',
    method: 'post',
    data: data
  })
}

export const getProcessingData = (meetingId: string, flowItemId: string) => {
  return request<IResponseType<ProcessingData>>({
    url: '/api/meeting/getProcessingData?meetingId=' + meetingId + '&flowItemId=' + flowItemId,
    method: 'get'
  })
}

export const getOutputData = (meetingId: string, flowItemId: string) => {
  return request<IResponseType<OutputData>>({
    url: '/api/meeting/getOutputData?meetingId=' + meetingId + '&flowItemId=' + flowItemId,
    method: 'get'
  })
}
