from __future__ import annotations

from typing import TYPE_CHECKING

from pilot.model.parameter import BaseEmbeddingModelParameters
from pilot.utils.parameter_utils import _get_dict_from_obj
from pilot.utils.tracer import root_tracer, SpanType, SpanTypeRunName

if TYPE_CHECKING:
    from langchain.embeddings.base import Embeddings


class EmbeddingLoader:
    def __init__(self) -> None:
        pass

    def load(
        self, model_name: str, param: BaseEmbeddingModelParameters
    ) -> "Embeddings":
        metadata = {
            "model_name": model_name,
            "run_service": SpanTypeRunName.EMBEDDING_MODEL.value,
            "params": _get_dict_from_obj(param),
        }
        with root_tracer.start_span(
            "EmbeddingLoader.load", span_type=SpanType.RUN, metadata=metadata
        ):
            # add more models
            if model_name in ["proxy_openai", "proxy_azure"]:
                from langchain.embeddings import OpenAIEmbeddings

                return OpenAIEmbeddings(**param.build_kwargs())
            else:
                from langchain.embeddings import HuggingFaceEmbeddings

                kwargs = param.build_kwargs(model_name=param.model_path)
                return HuggingFaceEmbeddings(**kwargs)
