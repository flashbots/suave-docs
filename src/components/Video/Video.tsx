/**
 * Copyright (c) Flashbots Ltd. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
interface IVideo {
  src: string;
  title: string;
}

function Video({src, title}: IVideo) {
  return (
    <div className="relative mb-3 w-full mb-64 md:mb-[32rem] xl:mb-[38rem]">
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute left-0 top-0 h-full w-full border-0 h-48 sm:h-64 md:h-96 lg:h-[30rem] xl:h-[35rem]"
      />
    </div>
  );
}

export default Video;
