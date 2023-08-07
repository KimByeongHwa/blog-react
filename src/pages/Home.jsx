function Home() {
  return (
    <>
      <div className='mb-3'>
        <h4>
          <strong>React</strong> & <strong>redux-toolkit</strong>을 활용하여 만든 간단한 블로그입니다.
        </h4>
      </div>

      <br />

      <p>주요 기능은 다음과 같습니다.</p>
      <ol>
        <li>로그인 & 로그아웃</li>
        <li>게시글 CRUD</li>
        <li>게시글 검색</li>
        <li>Toast Notification</li>
      </ol>

      <br />
      <br />

      <div className='mb-5'>
        <h4 className='mb-3'>
          <strong>1. 로그인 & 로그아웃</strong>
        </h4>
        <p>헤더 우측에 있는 Login 클릭 시 로그인됩니다.</p>
        <p>로그인 여부에 따라 Login/Logout으로 표시됩니다.</p>
      </div>

      <div className='mb-5'>
        <h4 className='mb-3'>
          <strong>2. 게시글 CRUD</strong>
        </h4>
        <p>로그인 상태에서만 게시글을 작성, 수정, 삭제할 수 있습니다.</p>
        <p>비공개 글은 로그인 상태에서 Admin 페이지에 방문하여 조회할 수 있습니다.</p>
        <p>게시글 작성, 수정 시 Title, Body의 내용을 모두 채워야만 제출됩니다.</p>
      </div>
      <div className='mb-5'>
        <h4 className='mb-3'>
          <strong>3. 게시글 검색</strong>
        </h4>
        <p>여러 개의 게시글들 중 원하는 제목의 게시글을 검색할 수 있습니다.</p>
      </div>
      <div className='mb-5'>
        <h4 className='mb-3'>
          <strong>4. Toast Notification</strong>
        </h4>
        <p>게시글 생성, 삭제 시 실행 결과에 대한 toast 형식 알림을 발생시킵니다.</p>
        <p>각 알림들을 store를 통해 관리하여 페이지 이동 시에도 알림이 유지됩니다.</p>
        <p>발생한 알림은 클릭하면 사라지고, 클릭하지 않을 시 5초가 경과하면 자동으로 사라집니다.</p>
      </div>
    </>
  );
}

export default Home;
